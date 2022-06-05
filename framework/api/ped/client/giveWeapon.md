# giveWeapon

```lua
NCs.Ped:giveWeapon(pedId, weaponName, ammo, isHidden, forceInHand)
```

### Arguments
| Argument    | Type    | Optional   | Default | Explanation                                      |
|-------------|---------|------------|---------|--------------------------------------------------|
| pedId       | number  | false      | -       | The ID of the ped.                               |
| weaponName  | string  | false      | -       | The Name of the weapon.                          |
| ammo        | number  | false      | -       | The Quantity of the ammo.                        |
| isHidden    | boolean | false      | -       | If player see the weapon in the weapon selector. |
| forceInHand | boolean | false      | -       | If weapon goes directly in hand.                 |

### Examples
```lua
local client = PlayerPedId()
NCs.Ped:giveWeapon(client, 'weapon_pistol', 1610, false, true)
```

List of weapons name [here](https://wiki.rage.mp/index.php?title=Weapons)