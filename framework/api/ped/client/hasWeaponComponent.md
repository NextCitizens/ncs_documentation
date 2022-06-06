# hasWeaponComponent

```lua
NCs.Ped:hasWeaponComponent(pedId, weaponName, componentName)
```
Check if the specified ped has the specified weapon component on the specified weapon. (lot of specified)

### Arguments
| Argument      | Type    | Optional   | Default | Explanation               |
|---------------|---------|------------|---------|---------------------------|
| pedId         | number  | false      | -       | The ID of the ped.        |
| weaponName    | string  | false      | -       | The Name of the weapon.   |
| componentName | number  | false      | -       | The Name of the component |

### Examples
```lua
local client = PlayerPedId()
if (NCs.Ped:hasWeaponComponent(client, 'weapon_pistol', 'suppressor')) then
    print("The player has a pistol with a suppressor on him!")
else
    print("The player hasn't a pistol with a suppresoor on him!")
end 
```