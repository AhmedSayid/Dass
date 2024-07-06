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
				<h2 class="title">Register Account</h2>
				<p>If you already have an account with us, please login at the <router-link :to="{name:'Login'}">login page</router-link>.</p>
				<form action="" method="post" enctype="multipart/form-data" class="form-horizontal account-register clearfix">
					<fieldset id="account">
						<legend>Your Personal Details</legend>
						<div class="form-group required" style="display: none;">
							<label class="col-sm-2 control-label">Customer Group</label>
							<div class="col-sm-10">
								<div class="radio">
									<label>
										<input type="radio" name="customer_group_id" value="1" checked="checked"> Default
									</label>
								</div>
							</div>
						</div>
						<div class="form-group required">
							<label class="col-sm-2 control-label" for="input-firstname">First Name</label>
							<div class="col-sm-10">
								<input type="text" name="firstname" value="" placeholder="First Name" id="input-firstname" class="form-control">
							</div>
						</div>
						<div class="form-group required">
							<label class="col-sm-2 control-label" for="input-lastname">Last Name</label>
							<div class="col-sm-10">
								<input type="text" name="lastname" value="" placeholder="Last Name" id="input-lastname" class="form-control">
							</div>
						</div>
						<div class="form-group required">
							<label class="col-sm-2 control-label" for="input-email">E-Mail</label>
							<div class="col-sm-10">
								<input type="email" name="email" value="" placeholder="E-Mail" id="input-email" class="form-control">
							</div>
						</div>
						<div class="form-group required">
							<label class="col-sm-2 control-label" for="input-telephone">Telephone</label>
							<div class="col-sm-10">
								<input type="tel" name="telephone" value="" placeholder="Telephone" id="input-telephone" class="form-control">
							</div>
						</div>
					</fieldset>
					<fieldset>
						<legend>Your Password</legend>
						<div class="form-group required">
							<label class="col-sm-2 control-label" for="input-password">Password</label>
							<div class="col-sm-10">
								<input type="password" name="password" value="" placeholder="Password" id="input-password" class="form-control">
							</div>
						</div>
						<div class="form-group required">
							<label class="col-sm-2 control-label" for="input-confirm">Password Confirm</label>
							<div class="col-sm-10">
								<input type="password" name="confirm" value="" placeholder="Password Confirm" id="input-confirm" class="form-control">
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