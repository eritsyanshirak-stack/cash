/* Synthetic analytics only. Loaded on demand by the Demo tab; never written to sf5. */
(function(root){
 root.CashAnalyticsFixtures=function(){const events=[],subscriptions=[];const event=(userId,stage,day,extra={})=>events.push({eventId:'synthetic-'+events.length,userId,stage,at:'2026-09-'+String(day).padStart(2,'0')+'T10:00:00Z',platform:['link_sent','link_delivered'].includes(stage)?'chatplace':'shirfit',...extra});
 for(let i=1;i<=20;i++){const user='demo-app-'+i,key=i<=10?'demo-person-'+i:undefined;event(user,'opened',1,{crossPlatformKey:key});if(i<=12){event(user,'registered',2,{crossPlatformKey:key});if(i<=9)event(user,'setup_completed',3,{crossPlatformKey:key});if(i<=4)event(user,'first_paid',4,{plan:i<=2?'monthly':'annual',crossPlatformKey:key});}if(i<=10)event('demo-chat-'+i,'link_sent',1,{crossPlatformKey:key,source:i<=6?'Stories':'Telegram'});}
 for(let i=1;i<=8;i++){const plan=i<=5?'monthly':'annual',user='demo-renew-'+i,sub='demo-sub-'+i;subscriptions.push({subscriptionId:sub,userId:user,plan,dueDate:'2026-09-03'});if([1,2,3,6,7].includes(i))event(user,'renewed',5,{plan,subscriptionId:sub});}
 return {connected:false,synthetic:true,available:{link_sent:true,link_delivered:false,opened:true,registered:true,setup_completed:true,first_paid:true,due:true,renewed:true},events,subscriptions};};
})(globalThis);
