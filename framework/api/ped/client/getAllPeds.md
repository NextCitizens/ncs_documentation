# getAllPeds

```lua
NCs.Ped:getAllPeds()
```
Get all peds in the map.

### Arguments
No argument.

### Examples
```lua
local peds = NCs.Ped:getAllPeds()
for i, v in ipairs(peds) do
    print("A ped with model " .. GetEntityModel(v.ped) .. " is " .. v.distance .. " meters away.")
end
```
