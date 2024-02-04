export const ReachOutFormData={
    username:{
        defaultValue:"",
        regex:/^[A-Za-z]+$/,
        validation:function(value){
            return this.regex.test(value)?"Please Enter the username":"";        }
    },
    email:{
        defaultValue:"",
        regex:/^[a-zA-Z0-9._-]+@+[a-zA-Z0-9]+\.[a-zA-Z]{24}$/,
        validation:function(value){
            return this.regex.test(value)?"Please enter valid email":""
        }
    },
    phone:{
       defaultValue:null,
        regex:/^[0-9]+$/,
        validation:function(value){
            return !this.regex.test(value)?"Please enter valid Phone number":""
        }
    }

}   