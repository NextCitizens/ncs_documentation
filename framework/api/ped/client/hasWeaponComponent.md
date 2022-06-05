# hasWeaponComponent

```lua
NCs.Ped:hasWeaponComponent(pedId, weaponName, componentName)
```

### Examples
```lua
local client = PlayerPedId()
if (NCs.Ped:hasWeaponComponent(client, 'weapon_pistol', 'suppressor')) then
    print("The player has a pistol with a suppressor on him!")
else
    print("The player hasn't a pistol with a suppresoor on him!")
end 
```