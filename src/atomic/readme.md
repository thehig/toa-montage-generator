# Basic Page Layout

```yaml
App: # environment
  - Redux Provider
  - MUI Provider
  - Montage Page: # ecosystem
    - Terrain Form: # organism
        - Terrain # atom SelectField
        - Speed # atom SelectField
        - Pace # atom SelectField
        - Modifier # atom TextField
        - Advantage & Disadvantage # atom CheckboxGroup
        - Days # atom TextField
        - Offset # atom TextField
        - Lost # atom CheckboxGroup
      - Reset
      - Go

    - Montage Output: # organism
      - Day[]: # molecule ListItem
        - Navigation # molecule ListItem
        - Encounters # molecule ListItem
        - Weather # molecule ListItem

```