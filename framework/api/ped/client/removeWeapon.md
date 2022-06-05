# removeWeapon

```lua
NCs.Ped:removeWeapon(pedId, weaponName)
```

### Arguments
| Argument   | Type   | Optional   | Default | Explanation             |
|------------|--------|------------|---------|-------------------------|
| pedId      | number | false      | -       | The ID of the ped.      |
| weaponName | string | false      | -       | The Name of the weapon. |

### Examples
```lua
local client = PlayerPedId()
NCs.Ped.removeWeapon(client, 'weapon_pistol')
```