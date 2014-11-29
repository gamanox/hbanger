OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, '303987353132508', 'bc230f241f2870501511e144620ca679'
end