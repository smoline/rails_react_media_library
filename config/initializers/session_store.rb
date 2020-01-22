# TODO: fill in production domain with correct info
if Rails.env === 'production'
  Rails.application.config.session_store :cookie_store, key: '_rails_react_media_library', domain: 'your-frontend-domain'
else
  Rails.application.config.session_store :cookie_store, key: '_rails_react_media_library'
end