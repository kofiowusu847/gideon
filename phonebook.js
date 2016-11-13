
var phoneApp = angular
			   .module('phoneApp',[])
			   .controller('myPhoneCtr',function($scope){

			   		$scope.contact= {
			   			Name:'',
			   			Phone1:'',
			   			Phone2:'',
			   			Phone3:'',
			   			Email:''
			   		} 

			   		$scope.EmptList = [];
			   		

			   		$scope.SaveContact = function(){
						
			   		var contactList = {
			   			Name:$scope.contact.Name,
			   			Phone1:$scope.contact.Phone1,
			   			Phone2:$scope.contact.Phone2,
			   			Phone3:$scope.contact.Phone3,
			   			Email:$scope.contact.Email
			   		}

			   		$scope.EmptList.push(contactList);
			   		ClearList();
			   		}
			   			function ClearList(){
			   			$scope.contact.Name='';
			   			$scope.contact.Phone1 ='';
			   			$scope.contact.Phone2 ='';
			   			$scope.contact.Phone3 ='';
			   			$scope.contact.Email ='';
			   			}
			   		$scope.RemoveItem = function(contactList){

			   			var _index=$scope.EmptList.indexOf(contactList);
			   			$scope.EmptList.splice(_index,1);
			   		}

			   		$scope.BindSelectedData =function(contactList){
			   			$scope.contact.Name = contactList.Name;
			   			$scope.contact.Phone1 = contactList.Phone1;
			   			$scope.contact.Phone2 = contactList.Phone2;
			   			$scope.contact.Phone3 = contactList.Phone3;
			   			$scope.contact.Email = contactList.Email;
			   		}
			   		$scope.UpDateData = function(){
			   			$.grep($scope.EmptList,function(e){
			   				if(e.Name==$scope.contact.Name){
			   					e.Phone1=$scope.contact.Phone1;
			   				}
			   			})
			   		}
					
					/*Handling Errors*/
					
					
			   		
			   })