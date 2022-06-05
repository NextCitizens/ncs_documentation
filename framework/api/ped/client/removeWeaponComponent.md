# removeWeaponComponent

```lua
NCs.Ped:removeWeaponComponent(pedId, weaponName, componentName)
```

### Arguments
| Argument      | Type   | Optional   | Default | Explanation               |
|---------------|--------|------------|---------|---------------------------|
| pedId         | number | false      | -       | The ID of the ped.        |
| weaponName    | string | false      | -       | The Name of the weapon    |
| componentName | string | false      | -       | The Name of the component |

### Examples
```lua
local client = PlayerPedId()
NCs.Ped.removeWeaponComponent(client, 'weapon_pistol', 'suppressor')
```