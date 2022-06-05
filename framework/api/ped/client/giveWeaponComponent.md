# giveWeaponComponent

```lua
NCs.Ped:giveWeaponComponent(pedId, weaponName, componentName)
```

### Arguments
| Argument      | Type   | Optional   | Default | Explanation                |
|---------------|--------|------------|---------|----------------------------|
| pedId         | number | false      | -       | The ID of the ped.         |
| weaponName    | string | false      | -       | The Name of the weapon.    |
| componentName | string | false      | -       | The Name of the component. |

### Examples
```lua
local client = PlayerPedId()
NCs.Ped:giveWeapon(client, 'weapon_pistol', 1610, false, true)
NCs.Ped:giveWeaponComponent(client, 'weapon_pistol', 'suppressor')
```
List of weapons components name [here](https://wiki.rage.mp/index.php?title=Weapons_Components)