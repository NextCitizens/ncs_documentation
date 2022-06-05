# getClosestVehicle

```lua
NCs.Vehicles:getClosest(coords)
``` 

### Examples

```lua
local position = NCs.Entity:getPosition(PlayerPedId())
local vehicle, distance = NCs.Vehicle:getClosest(position)
NCs.Vehicle:delete(vehicle) -- Will delete the closest vehicle.
if (distance >= 10.0) then
    print("The closest vehicle is more than 10 meters away!")
else
    print("The closest vehicle isn't more than 10 meters away!")
end 
```