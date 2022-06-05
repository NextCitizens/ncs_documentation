# spawnVehicle


```lua
NCs.Vehicles:spawn(modelName, x, y, z, heading, callback)
``` 

### Examples

```lua
NCs.Vehicles:spawn('sultanrs', 180.0, 780.0, 45.0, 90.0, function(vehicles) 
    -- vehicles is the vehicle id.
end)
```

List of vehicles models name [here](https://wiki.gtanet.work/index.php?title=Vehicle_Models)