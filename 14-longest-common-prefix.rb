# @param {String[]} strs
# @return String
def get_shortest_word(strs)
  shortest = ""
  shortest_len = 10000;
  for str in strs
    if str.length < shortest_len then
      shortest = str
      shortest_len = str.length
    end
  end
  return shortest
end

# @param {String[]} strs
# @return {String}
def longest_common_prefix(strs)
  shortest = get_shortest_word(strs)
  strs.delete(shortest)
  prefix_len = 0
  for i in 0..shortest.length do
    matches = true
    for str in strs
      if str[i] != shortest[i] then
        matches = false
        break
      end
    end
    if matches then
      prefix_len += 1
    else
      break
    end
  end

  if prefix_len > 0 then
    prefix = shortest[0..prefix_len-1]
  else
    prefix = ""
  end
  return prefix
end

puts longest_common_prefix(["flower", "flow", "flight"])
puts longest_common_prefix(["dog", "racecar", "car"])
