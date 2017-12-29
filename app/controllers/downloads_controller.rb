class DownloadsController < ApplicationController
 
  def show
    respond_to do |format|
      format.pdf { send_invoice_pdf }
    end
  end
 
  private
 
  def invoice_pdf
    invoice = Payroll.find(params[:payroll_id])
    Invoicepdf.new(invoice)
  end
 
  def send_invoice_pdf
    send_file invoice_pdf.to_pdf,
      filename: invoice_pdf.filename,
      type: "application/pdf",
      disposition: "inline"
  end
end