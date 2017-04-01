wrap json, @day_stat do
  json.partial! 'api/v1/day_stats/day_stat', day_stat: @day_stat
end