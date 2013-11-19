class Coupon < ActiveRecord::Base
  attr_accessible :user_id, :deal_id, :place, :address, :zip, :deal_title, :deal_info
  validates :deal_id, :place, :address, :zip, :deal_title, :deal_info, presence: true  
end
