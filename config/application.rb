require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module LifeStreamServer
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    config.generators do |g|
      g.factory_girl true
      g.helper false
      g.javascripts false
      g.stylesheets false
      g.template_engine :slim
      g.test_framework :rspec, fixture: false
    end
  end
end
