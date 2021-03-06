class Viaticos::ViaticoDetailsController < ApplicationController
  
  before_action :set_viatico 
  
  before_action :set_viatico_detail, :except=> [:new,:create]

  
  # GET /viatico_details
  # GET /viatico_details.json
  def index
    @viatico_details = ViaticoDetail.all
  end

  # GET /viatico_details/1
  # GET /viatico_details/1.json
  def show
    @gastos = Gasto.all
    @company = Company.find(1)
    @locations = @company.get_locations()
    @divisions = @company.get_divisions()
    @documents = @company.get_documents()
    @cajas = Caja.all      
    @employees = @company.get_employees 
  end

  # GET /viatico_details/new
  def new
    @viatico_detail = ViaticoDetail.new
    @gastos = Gasto.order(:codigo)
    @company = Company.find(1)
    @locations = @company.get_locations()
    @divisions = @company.get_divisions()
    @documents = @company.get_documents()
    @cajas = Caja.all      
    @viatico_detail[:fecha] = Date.today 
    @destinos = Destino.all
    @employees = @company.get_employees 
    
  end

  # GET /viatico_details/1/edit
  def edit
    @gastos = Gasto.order(:codigo)
    @company = Company.find(1)
    @locations = @company.get_locations()
    @divisions = @company.get_divisions()
    @documents = @company.get_documents()
    @cajas = Caja.all      
    @destinos = Destino.all
    @employees = @company.get_employees 
    
    @transporte = Tranportorder.find(@viatico_detail.tranportorder_id)
    @ac_item = @transporte.code 
    @ac_item_id = @transporte.id
    
    if @viatico_detail.supplier_id != nil
    @supplier = Supplier.find(@viatico_detail.supplier_id)
    @ac_supplier = @supplier.name
    @ac_supplier_id = @supplier.id
    else
    @ac_supplier = ""
    @ac_supplier_id = ""
      
    end 
    
    @employee = Employee.find(@viatico_detail.employee_id)
    @ac_employee = @employee.full_name
    @ac_employee_id = @employee.id
    

  end

  # POST /viatico_details
  # POST /viatico_details.json
  def create
    
    @gastos = Gasto.order(:codigo)
    @company = Company.find(1)
    @locations = @company.get_locations()
    @divisions = @company.get_divisions()
    @documents = @company.get_documents()
    @cajas = Caja.all      
    @destinos = Destino.all
    @employees = @company.get_employees 
    
    @viatico_detail = ViaticoDetail.new(viatico_detail_params)    
    @viatico_detail.viatico_id  = @viatico.id 
    
    @viatico_detail.tranportorder_id = params[:ac_item_id]
    @viatico_detail.supplier_id = params[:ac_supplier_id]
    @viatico_detail.document_id = params[:viatico_detail][:tm]
    
    if params[:ac_employee_id] == ""
        @viatico_detail.employee_id = 64
    end 

    zeros =' 00:00:00'
     @viatico_detail.fecha = params[:viatico_detail][:fecha] << zeros 
    
     respond_to do |format|
      if @viatico_detail.save
         begin
      @viatico[:inicial] = @viatico.get_total_inicial
    rescue
      @viatico[:inicial] = 0
    end 
    
    begin
      @viatico[:total_ing] = @viatico.get_total_ing
    rescue 
      @viatico[:total_ing] = 0
    end 
    begin 
      @viatico[:total_egreso]=  @viatico.get_total_sal
    rescue 
      @viatico[:total_egreso]= 0 
    end 
    @viatico[:saldo] = @viatico[:inicial] +  @viatico[:total_ing] - @viatico[:total_egreso]
         @viatico.save 
          if @viatico.caja_id == 1 
          a = @cajas.find(1)
          a.inicial =  @viatico[:saldo]
          a.save
        end 
        if @viatico.caja_id == 2
          a = @cajas.find(2)
          a.inicial =  @viatico[:saldo]
          a.save
        end 
        if @viatico.caja_id == 3 
          a = @cajas.find(3)
          a.inicial =  @viatico[:saldo]
          a.save
        end 
        if @viatico.caja_id == 4 
          a = @cajas.find(4)
          a.inicial =  @viatico[:saldo]
          a.save
        end 
         format.html { redirect_to @viatico, notice: 'Viatico Detalle fue creado satisfactoriamente.' }
         format.json { render :show, status: :created, location: @viatico }
       else
         format.html { render :new }
         format.json { render json: @viatico_detail.errors, status: :unprocessable_entity }
       end
     end
  end

  # PATCH/PUT /viatico_details/1
  # PATCH/PUT /viatico_details/1.json
  def update
    @gastos = Gasto.order(:codigo)
    @company = Company.find(1)
    @locations = @company.get_locations()
    @divisions = @company.get_divisions()
    @documents = @company.get_documents()
    @employees = @company.get_employees()
    
    @cajas = Caja.all      
    @destinos = Destino.all
    
    @viatico_detail = ViaticoDetail.find(params[:id]) 
    @viatico_detail.viatico_id  = @viatico.id 
    @viatico_detail.fecha = params[:viatico_detail][:fecha]
    @viatico_detail.employee_id = params[:ac_employee_id]
    
    respond_to do |format|
      if @viatico_detail.update_attributes(employee_id: params[:viatico_detail][:employee_id],fecha: params[:viatico_detail][:fecha],importe: params[:viatico_detail][:importe],
        gasto_id: params[:viatico_detail][:gasto_id],destino_id: params[:viatico_detail][:destino_id],tm:params[:viatico_detail][:tm],numero: params[:viatico_detail][:numero],detalle: params[:viatico_detail][:detalle],document_id: params[:viatico_detail][:tm])
   begin
      @viatico[:inicial] = @viatico.get_total_inicial
    rescue
      @viatico[:inicial] = 0
    end 
    
    begin
      @viatico[:total_ing] = @viatico.get_total_ing
    rescue 
      @viatico[:total_ing] = 0
    end 
    begin 
      @viatico[:total_egreso]=  @viatico.get_total_sal
    rescue 
      @viatico[:total_egreso]= 0 
    end 
    @viatico[:saldo] = @viatico[:inicial] +  @viatico[:total_ing] - @viatico[:total_egreso]
        @viatico.save
        
         if @viatico.caja_id == 1 
          a = @cajas.find(1)
          a.inicial =  @viatico[:saldo]
          a.save
        end 
        if @viatico.caja_id == 2
          a = @cajas.find(2)
          a.inicial =  @viatico[:saldo]
          a.save
        end 
        if @viatico.caja_id == 3 
          a = @cajas.find(3)
          a.inicial =  @viatico[:saldo]
          a.save
        end 
        if @viatico.caja_id == 4 
          a = @cajas.find(4)
          a.inicial =  @viatico[:saldo]
          a.save
        end 
        format.html { redirect_to @viatico, notice: 'Viatico detail was successfully updated.' }
        format.json { render :show, status: :ok, location: @viatico }
      else
        format.html { render :edit }
        format.json { render json: @viatico.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /viatico_details/1
  # DELETE /viatico_details/1.json
  def destroy
      @cajas = Caja.all      
      if @viatico_detail.destroy
         begin
      @viatico[:inicial] = @viatico.get_total_inicial
    rescue
      @viatico[:inicial] = 0
    end 
    
    begin
      @viatico[:total_ing] = @viatico.get_total_ing
    rescue 
      @viatico[:total_ing] = 0
    end 
    begin 
      @viatico[:total_egreso]=  @viatico.get_total_sal
    rescue 
      @viatico[:total_egreso]= 0 
    end 
    @viatico[:saldo] = @viatico[:inicial] +  @viatico[:total_ing] - @viatico[:total_egreso]
        @viatico.save
        
         if @viatico.caja_id == 1 
          a = @cajas.find(1)
          a.inicial =  @viatico[:saldo]
          a.save
        end 
        if @viatico.caja_id == 2
          a = @cajas.find(2)
          a.inicial =  @viatico[:saldo]
          a.save
        end 
        if @viatico.caja_id == 3 
          a = @cajas.find(3)
          a.inicial =  @viatico[:saldo]
          a.save
        end 
        if @viatico.caja_id == 4 
          a = @cajas.find(4)
          a.inicial =  @viatico[:saldo]
          a.save
        end 
  
      flash[:notice]= "Item fue eliminado satisfactoriamente "
      redirect_to @viatico
    else
      flash[:error]= "Item ha tenido un error y no fue eliminado"
      render :show 
    end 
    
  end

  private
    # Use callbacks to share common setup or constraints between actions.
      def set_viatico 
      @viatico = Viatico.find(params[:viatico_id])
    end 
    
    def set_viatico_detail
      @viatico_detail = ViaticoDetail.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def viatico_detail_params
      
      params.require(:viatico_detail).permit(:fecha, :descrip, :document_id, :numero, :importe, :detalle, :tm, :CurrTotal, :tranportorder_id,:date_processed,:ruc,:supplier_id,:gasto_id,:employee_id,:destino_id)
    end
end
