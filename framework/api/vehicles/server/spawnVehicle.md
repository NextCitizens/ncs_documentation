# spawnVehicle


```lua
NCs.Vehicles:spawn(modelName, x, y, z, heading, callback)
``` 

### Arguments
| Argument  | Type     | Optional   | Default | Explanation              |
|-----------|----------|------------|---------|--------------------------|
| modelName | string   | false      | -       | The Model of the vehicle |
| x         | number   | false      | -       | X Position               |
| y         | number   | false      | -       | Y Position               |
| z         | number   | false      | -       | Z Position               |
| heading   | number   | false      | -       | Heading of the vehicle   |
| callback  | function | false      | -       | -                        |

### Examples

```lua
NCs.Vehicles:spawn('sultanrs', 180.0, 780.0, 45.0, 90.0, function(vehicles) 
    -- vehicles is the vehicle id.
end)
```

List of vehicles models name [here](https://wiki.gtanet.work/index.php?title=Vehicle_Models)