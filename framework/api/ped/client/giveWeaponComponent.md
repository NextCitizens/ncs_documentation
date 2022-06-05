# giveWeaponComponent

```lua
NCs.Ped:giveWeaponComponent(pedId, weaponName, componentName)
```

### Examples
```lua
local client = PlayerPedId()
NCs.Ped:giveWeapon(client, 'weapon_pistol', 1610, false, true)
NCs.Ped:giveWeaponComponent(client, 'weapon_pistol', 'suppressor')
```
List of weapons components name [here](https://wiki.rage.mp/index.php?title=Weapons_Components)