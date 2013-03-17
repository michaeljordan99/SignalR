using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace SignalR.Example1
{
    [HubName("processTransaction")] 
    public class ProcessTransactionHub : Hub
    {
        public void ProcessTransaction(string creditCardNumber, string expirationDate)
        {
            var transactionId = Guid.NewGuid(); 
            //Clients.Others.update(transactionId.ToString(), creditCardNumber, expirationDate);
            Clients.All.reportTransaction(transactionId.ToString(), creditCardNumber, expirationDate);

        }
    }
}