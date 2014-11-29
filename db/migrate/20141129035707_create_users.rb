class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :uid
      t.string :name
      t.string :image
      t.string :gender
      t.integer :age
      t.string :email
      t.integer :phone
      t.string :city
      t.string :state
      t.string :country
      t.string :provider
      t.string :oauth_token
      t.datetime :oauth_expires_at

      t.timestamps
    end
  end
end
