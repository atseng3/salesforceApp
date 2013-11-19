class Coupon < ActiveRecord::Base
  attr_accessible :user_id, :deal_id, :place, :address, :zip, :deal_title, :deal_info
  validates :deal_id, :place, :address, :zip, :deal_title, :deal_info, presence: true
  
  belongs_to :user, :foreign_key => :saved_coupons
end
