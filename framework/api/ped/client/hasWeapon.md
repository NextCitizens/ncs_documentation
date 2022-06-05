# hasWeapon

```lua
NCs.Ped:hasWeapon(pedId, weaponName)
```
Check if the specified ped has the specified weapon.

### Arguments
| Argument    | Type    | Optional   | Default | Explanation                                      |
|-------------|---------|------------|---------|--------------------------------------------------|
| pedId       | number  | false      | -       | The ID of the ped.                               |
| weaponName  | string  | false      | -       | The Name of the weapon.                          |

### Examples
```lua
local client = PlayerPedId()
if (NCs.Ped:hasWeapon(client, 'weapon_pistol')) then
    print("The player has a pistol on him!")
else
    print("The player hasn't a pistol on him!")
end 
```