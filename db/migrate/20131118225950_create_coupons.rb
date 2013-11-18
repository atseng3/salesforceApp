class CreateCoupons < ActiveRecord::Migration
  def change
    create_table :coupons do |t|
      t.integer :user_id
      t.integer :deal_id, null: false
      t.string :place, null: false
      t.string :address, null: false
      t.integer :zip, null: false
      t.string :deal_title, null: false
      t.string :deal_info, null: false
      t.timestamps
    end
    
    add_index :coupons, :user_id
  end
end
