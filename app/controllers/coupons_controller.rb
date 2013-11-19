class CouponsController < ApplicationController
  def show
    @coupon = Coupon.find(params[:id])
    respond_to do |format|
      format.html 
      format.json { render json: @coupon }
      format.mobile { render :show }
    end
  end
end