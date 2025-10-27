local mp = require 'mp'
local options = require 'mp.options'

local opts = {
  max_speed = 4,
  revert_delay = 0.5
}

options.read_options(opts)

local original_speed = nil
local is_fastforwarding = false
local revert_timer = nil

local function restore_speed()
  if is_fastforwarding and original_speed then
    mp.set_property_number("speed", original_speed)
    mp.osd_message(('⏪ back to %.2fx'):format(original_speed), 1)
    is_fastforwarding = false
    original_speed = nil
  end
end

local function temporary_fastforward(_, _, speed_arg)
  local target_speed = tonumber(speed_arg)
  if not target_speed then return end

  if revert_timer then
    revert_timer:kill()
    revert_timer = nil
  end

  if not is_fastforwarding then
    original_speed = mp.get_property_number("speed")
    is_fastforwarding = true
  end

  if target_speed > opts.max_speed then
    target_speed = opts.max_speed
  end

  mp.set_property_number("speed", target_speed)
  mp.osd_message(('▶▶ x%.2fx'):format(target_speed), 1)

  revert_timer = mp.add_timeout(opts.revert_delay, restore_speed)
end

mp.add_key_binding("=", "temporary-speedup-2x", function()
  temporary_fastforward(nil, nil, "2")
end, {repeatable=true})

mp.add_key_binding("+", "temporary-speedup-3x", function()
  temporary_fastforward(nil, nil, "2.5")
end, {repeatable=true})




