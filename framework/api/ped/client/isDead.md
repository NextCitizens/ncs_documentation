# isDead

```lua
NCs.Ped:isDead(pedId)
```
Check if the specified ped is dead or not.

### Arguments
| Argument      | Type    | Optional   | Default | Explanation               |
|---------------|---------|------------|---------|---------------------------|
| pedId         | number  | false      | -       | The ID of the ped.        |

### Examples
```lua
local client = PlayerPedId()
if (NCs.Ped:isDead(client)) then
    print("Client is dead!")
else
    print("Client isn't dead!")
end 
```