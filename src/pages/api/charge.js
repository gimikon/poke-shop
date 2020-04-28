import Stripe from 'stripe';
const stripe = new Stripe("sk_test_L7m4VDsxXukLvBidHziLgJ7p00RwoC6xsu")


export default async (req, res) => {
  const {id, amount} = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency:'USD',
      description:'Delicious banana',
      payment_method:id,
      confirm:true
    })
    console.log(payment)
    return res.state(200).json({
      confirm: 'abc123'
    })
  } catch(error){}
};