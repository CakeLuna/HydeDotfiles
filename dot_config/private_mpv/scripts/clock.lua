-- show_time.lua

mp.add_key_binding("c", "show-current-time", function()
  local time = os.date("%I:%M:%S %p")  -- e.g., 01:55:03 AM
  local box = "╭───────────────╮\n" ..
              "│   🕒  " .. time .. "   │\n" ..
              "╰───────────────╯"
  mp.osd_message(box, 3)
end)

