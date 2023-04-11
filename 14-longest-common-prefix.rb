# @param {String[]} strs
# @return {String}
def longest_common_prefix(strs)
  for i in 0..200 do
    matches = true
    for str in strs
      if str[i] != strs[0][i] then
        matches = false
        break
      end
    end
    if not matches then
      break
    end
  end

  if i > 0 then
    prefix = strs[0][0..i-1]
  else
    prefix = ""
  end
  return prefix
end

puts longest_common_prefix(["flower", "flow", "flight"])
puts longest_common_prefix(["dog", "racecar", "car"])
puts longest_common_prefix(["dog", "dogeball"])
