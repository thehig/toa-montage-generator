# toa-montage-generator
Tomb of Annihilation travel montage generator

Storybook hosted on [Github Pages](https://thehig.github.io/toa-montage-generator/)


## Logic/

#### consts

Describes things like: directions, speeds, paceModifiers, weather, terrain (not yet implemented)

#### dice

At its core uses `getRandomInt` to generate a number between `min` and `max` with an optional (but recommended) `name` prop

The `roll` function takes a `die` function parameter that is expected to generate a random number within some min/max range, and an `options` parameter

* **name** Names the roll, useful when debugging or outputting directly to the user. Is included in the output JSON
* **advantage** Boolean, if true rolls twice and takes the higher
* **disadvantage** Boolean, if true, rolls twice and takes the lower
* **modifier** Integer, if provided modifier will be added to the result of the roll
* **versus** Integer, if provided an additional `success` parameter will be added to the returned object with the result of `roll + modifier >= versus`

A dice generator `d` takes `sides` as its parameter and returns a function that when called will return a value between 1 and `sides` inclusive.

For future possible usage is `_d` is provided which will allow the usage of an alternate random number generator for those who want [real](https://www.random.org/clients/) randomness

For testing and causing predictable output `_dArray` is provided which will take an array of numbers and will return those numbers in order on loop forever. (Caution when using advantage or disadvantage to include that additional dice roll in your considerations of the test data)

Functions `d2, d4, d6, d8, d10, d12, d20, d100` are provided to roll the appropriate dice, and a single `dice` object which contains all of the afforementioned functions exported as default.

#### resolver

Exports a function that takes `dice`, an object that will be merged with the default dice, used for debugging and overriding specific dice, as well as the consts for `dice, paces, speeds, directions, weather`

The resolver function once called will provide 3 functions that are used in a single day of travel in toa. (1x Navigation Check, 3x EncounterCheck, 3x WeatherCheck)

##### navigationCheck

Takes a `navigator` object (which is actually an `options` parameter for the `roll` function), a `DC` which the navigator must roll equal to or higher to navigate safely, `pace` (which must match something from consts) modifies the navigation DC (faster is harder, slower is easier) as well as determines how many hexes should be traversed in a day, `speed` is the normal travelling pace (again, must match something in consts) and determines how many hexes would be travelled on a normal day at this speed (walk = 1, boat = 2), and `lost` which determines whether or not the navigator was lost at the start of the day. This is used to determine when the navigator realises they were lost (i.e. became found)

The navigationCheck will figure out the DC taking the navigation DC and pace into account and roll a d20 with (adv|disadv|modifier) from the navigator.

The following result props are then created

* **rolls** contains all of the rolls that were made by the navigator, including d4 to determine pace (where applicable) and d6 to determine direction (when lost)
* **success** did the navigator succeed on their nav check
* **lost** did the navigator fail on their nav check
  * **direction** if failed, what direction did they go
* **distance** how many hexes were travelled assuming no interruptions/triggers, includes slow/fast pace and walk/boat speed
* **becameLost** did the navigator fail this navigation check from a known position
* **stillLost** did the navigator fail this navigation check from a previously unknown position
* **becameFound** did the navigator succeed on this navigation check from a previously unknown position

##### encounterCheck

Takes a `DC` prop that will determine whether or not any given roll triggers an encounter. Higher numbers make it less likely, with anything over 20 being impossible.

Returns an object with an `encounter` prop and the encounter roll result if an encounter was triggered, as well as all of the rolls that were made


##### weatherCheck

Takes no parameters, rolls a d20, find the corresponding range from the weather consts and return the roll, the `name` and the `effect` if any from the consts.

#### montage

Takes a preconfigured `resolver` prop, `navigator` which contains options for the navigation check roll, `pace`, `speed` and `navigationDC` which affect the rolls for the days travel, and `encounterDC` which determines how likely an encounter is.

This returns two functions

##### day

Takes a `lost` parameter which determines whether the navigator starts the day lost, enabling the becameFound prop from the navigationCheck

Returns an object that contains all the rolls for the day

* **navigation** How well did the navigator do their thing, how far did they get in hexes depending on pace & speed, how lost did they get depending on navigation and in what direction
* **encounters** The 3 encounter rolls for the day, as well as any rolls on the d100 encounter table if an encounter triggers based on `encounterDC`
* **weather** The 3 rolls on the weather table with name and effect

##### travel

Takes 1 required prop `numDays` which is how many days are to be travelled for assuming no triggers that would require player input. Takes an optional prop with `lost` allowing the operator of the tool to start a travel montage continuing from a previously lost state, as well as `daysOffset` which is used only to track the current day number (if you're that sort of DM, and I am) to help manage calendar triggered events

Returns an object that contains every set of `day` rolls, as well as detecting stopping conditions where player input will be required

* **days** contains as many `day` results as were made before a trigger was encountered
* **completed** players travelled for `numDays` without trigger
* **reasonsForStopping** players were stopped for some reason(s), what were they
* **distance** how many hexes were travelled before the trigger
* **lost** when the next montage is being run, should the players start lost?

The `reasonsForStopping` are times when input is required from the players, and the montage must be stopped. Since the entire day is rolled at once, this may result in needing to reroll some stuff for the day depending on player choices
* **Became Found** players were lost, but are now found and may need to choose a new direction. Rolls including pace, speed are already made for the day, so rerolling from this day may be necessary (YMMV)
* **Encounter** players have an encounter from the encounter table
* **Weather** torrential weather is hazardous to travel in

#### wrapper

Provides an easier way to create a montage without having to specify all the props from above. Assumes you want no debug dice and the default consts and exports a `montage` function thats fully populated with `dice` and `resolver`.

`generateReadout` takes the result of a previous `montage` call and attempts to streamline the multitude of rolls into a more digestable JSON object.

`narrate` takes a few options, as well as the result from `generateReadout` and creates a string that describes the montage in the shortest form possible.

#### cli

Used for creating a montage from a node CLI command. Uses the functions from `wrapper` to configure the montage runner, and options from the CLI to configure the montage parameters. See the options definitions in the cli file for more information