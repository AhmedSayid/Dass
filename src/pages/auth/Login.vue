<template>
	<div class="main-container container">
		<ul class="breadcrumb">
			<li><a href="#"><i class="fa fa-home"></i></a></li>
			<li><a href="#">Account</a></li>
			<li><a href="#">Login</a></li>
		</ul>
		
		<div class="row">
			<div id="content" class="col-sm-12">
				<div class="page-login">
				
					<div class="account-border">
						<div class="row">
							<div class="col-sm-6 new-customer">
								<div class="well">
									<h2><i class="fa fa-file-o" aria-hidden="true"></i> مستخدم جديد</h2>
									<p>من خلال إنشاء حساب، ستتمكن من التسوق بشكل أسرع، وستكون على اطلاع دائم بحالة الطلب، وتتبع الطلبات التي قمت بها مسبقًا.</p>
								</div>
								<div class="bottom-form">
                                    <router-link :to="{name:'Register'}">
                                        <a href="#" class="btn btn-default pull-right">متابعة</a>
                                    </router-link>
								</div>
							</div>
							
							<form action="#" method="post" enctype="multipart/form-data">
								<div class="col-sm-6 customer-login">
									<div class="well">
										<h2><i class="fa fa-file-text-o" aria-hidden="true"></i>  عودة الزبون </h2>
										<p><strong>لقد عدت</strong></p>
										<div class="form-group">
											<label class="control-label " for="input-email">لبريد الالكتروني</label>
											<input type="text" name="email" value="" id="input-email" class="form-control" />
										</div>
										<div class="form-group">
											<label class="control-label " for="input-password">كلمة المرور</label>
											<input type="password" name="password" value="" id="input-password" class="form-control" />
										</div>
									</div>
									<div class="bottom-form">
										<input type="submit" value="تسجيل" class="btn btn-default pull-right" />
										<a href="#" class="forgot">نسيت كلمة المرور</a>
									</div>
								</div>
							</form>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Navbar from '../../components/Navbar.vue';
export default {
    name:'Login',
    components:{
        Navbar
    }
}
</script>