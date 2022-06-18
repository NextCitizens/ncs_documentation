# spawn

```lua
NCs.Vehicles:spawn(modelName, coords, heading, clientSide)
```

### Arguments

| Argument   | Type    | Optional | Default | Explanation                   |
| ---------- | ------- | -------- | ------- | ----------------------------- |
| modelName  | string  | false    | -       | The ID of the vehicle         |
| coords     | vector3 | false    | -       | Position to spawn the vehicle |
| heading    | number  | false    | -       | Heading of the vehicle        |
| clientSide | boolean | false    | -       | -                             |

### Examples

```lua
NCs.Vehicles:spawn('sultanrs', NCs.Ped:getPosition(PlayerPedId()), 90.0, true)
```

List of vehicles models name [here](https://wiki.gtanet.work/index.php?title=Vehicle_Models)
