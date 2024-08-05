<template>

    <div>
        <div class="main-container container">
		<ul class="breadcrumb">
			<li><a href="#"><i class="fa fa-home"></i></a></li>
			<li><a href="#">Account</a></li>
			<li><a href="#">Register</a></li>
		</ul>
		
		<div class="row">
			<div id="content" class="col-sm-12">
				<h2 class="title">انشاء حساب جديد </h2>
				<p>إذا كان لديك بالفعل حساب معنا، يرجى تسجيل الدخول على<router-link :to="{name:'Login'}">تسجيل دخول</router-link>.</p>
				<form action="" method="post" enctype="multipart/form-data" class="form-horizontal account-register clearfix">
					<fieldset id="account">
						<legend>ادخل بيناتك الشخصية</legend>
						<div class="form-group required" style="display: none;">
							<label class="col-sm-2 control-label">بينات العميل </label>
							<div class="col-sm-10">
								<div class="radio">
									<label>
										<input type="radio" name="customer_group_id" value="1" checked="checked"> Default
									</label>
								</div>
							</div>
						</div>
						<div class="form-group required">
							<label class="col-sm-2 control-label" for="input-firstname">الاسم الاول </label>
							<div class="col-sm-10">
								<input type="text" name="firstname" value="" placeholder="الاسم الاول " id="input-firstname" class="form-control">
							</div>
						</div>
						<div class="form-group required">
							<label class="col-sm-2 control-label" for="input-lastname">الاسم الاخير </label>
							<div class="col-sm-10">
								<input type="text" name="lastname" value="" placeholder="الاسم الاخير" id="input-lastname" class="form-control">
							</div>
						</div>
						<div class="form-group required">
							<label class="col-sm-2 control-label" for="input-email">الاميل</label>
							<div class="col-sm-10">
								<input type="email" name="email" value="" placeholder="الايمل" id="input-email" class="form-control">
							</div>
						</div>
						<div class="form-group required">
							<label class="col-sm-2 control-label" for="input-telephone">رقم الهاتف</label>
							<div class="col-sm-10">
								<input type="tel" name="telephone" value="" placeholder="رقم الهاتف" id="input-telephone" class="form-control">
							</div>
						</div>
					</fieldset>
					<fieldset>
						<legend>كلمة المرور </legend>
						<div class="form-group required">
							<label class="col-sm-2 control-label" for="input-password">كلمة المرور </label>
							<div class="col-sm-10">
								<input type="password" name="password" value="" placeholder="كلمة المرور" id="input-password" class="form-control">
							</div>
						</div>
						<div class="form-group required">
							<label class="col-sm-2 control-label" for="input-confirm">تاكيد كلمة المرور </label>
							<div class="col-sm-10">
								<input type="password" name="confirm" value="" placeholder="تاكيد كلمة المرور " id="input-confirm" class="form-control">
							</div>
						</div>
					</fieldset>
				</form>
			</div>
		</div>
	</div>
    </div>
</template>
<script>
import Navbar from '../../components/Navbar.vue';
export default {
    name:'Regsiter',
    components:{
        Navbar
    }
}
</script>