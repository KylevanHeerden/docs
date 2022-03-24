# Setting up billing accounts

Before you are able to create an Organisation, Product or ProductDeployment resources, you need to have a Google Cloud 
Billing account.

Creating a Billing Account is super simple.  And if this is your first time, you'll receive up to $300 free credits 🎉 Nice.

1. Create a billing account using the Google Cloud Console. [Create one here](https://console.cloud.google.com/billing/create)
2. Once created, navigate to your [Billing Page](https://console.cloud.google.com/billing)
3. Add the email `admin@alis.exchange` as a `Billing Account User` using the Permissions tab in the right panel.
   1. This will enable `alis.exchange` to associate your billing account to a newly created Organisation or Product.
4. Make a note of your Billing Account ID of the form: `01D8CA-3E5EA4-88AEDD` 
   1. you will need to provide this when creating resources in the alis_ cli