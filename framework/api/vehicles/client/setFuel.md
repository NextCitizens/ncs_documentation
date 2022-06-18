# setFuel

```lua
NCs.Vehicles:setFuel(vehicleId, fuel)
```

### Arguments

| Argument  | Type   | Optional | Default | Explanation           |
| --------- | ------ | -------- | ------- | --------------------- |
| vehicleId | number | false    | -       | The ID of the vehicle |
| fuel      | number | false    | -       | Value of fuel         |

### Examples

```lua
local vehicle = GetVehiclePedIsIn(PlayerPedId())
NCs.Vehicle:setFuel(vehicle, 5.0)
```
