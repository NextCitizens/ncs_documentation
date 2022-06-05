# hasWeapon

```lua
NCs.Ped:hasWeapon(pedId, weaponName)
```

### Examples
```lua
local client = PlayerPedId()
if (NCs.Ped:hasWeapon(client, 'weapon_pistol')) then
    print("The player has a pistol on him!")
else
    print("The player hasn't a pistol on him!")
end 
```