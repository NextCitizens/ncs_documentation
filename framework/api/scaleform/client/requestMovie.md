# requestMovie

```lua
NCs.Scaleform:requestMovie(movieName)
``` 

### Examples

```lua
scaleform_handle = NCs.Scaleform:requestMovie("BREAKING_NEWS")
BeginScaleformMovieMethod(scaleform_handle, "SET_TEXT")
ScaleformMovieMethodAddParamTextureNameString(message)
ScaleformMovieMethodAddParamTextureNameString(bottom)
EndScaleformMovieMethod()
BeginScaleformMovieMethod(scaleform_handle, "SET_SCROLL_TEXT")
ScaleformMovieMethodAddParamInt(0)
ScaleformMovieMethodAddParamInt(0)
ScaleformMovieMethodAddParamTextureNameString(title)
EndScaleformMovieMethod()
BeginScaleformMovieMethod(scaleform_handle, "DISPLAY_SCROLL_TEXT")
ScaleformMovieMethodAddParamInt(0)
ScaleformMovieMethodAddParamInt(0)
EndScaleformMovieMethod()
while time > 0 do
  Wait(1)
  time = time - 0.01
  DrawScaleformMovieFullscreen(scaleform_handle, 255, 255, 255, 255)
end
SetScaleformMovieAsNoLongerNeeded(scaleform_handle)
```
