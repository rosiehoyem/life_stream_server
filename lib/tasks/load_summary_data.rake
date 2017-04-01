require 'csv'
require 'open-uri'

namespace :data do 
  desc "load all data"
  task load_all: [:environment] do
    LoadData.read_and_load_csv
  end
end