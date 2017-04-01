require 'csv'
require 'open-uri'

namespace :data do 
  desc "load all data"
  task load_all: [:environment] do
    LoadData.run
  end
end