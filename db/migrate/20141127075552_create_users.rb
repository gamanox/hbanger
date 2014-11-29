class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :provider
      t.string :uid
      t.string :name
      t.string :oauth_token
      t.datetime :oauth_expires_at
      t.string :email
      t.integer :phone
      t.string :image
      t.string :country
      t.integer :age

      t.timestamps
    end
  end
end
