import React from 'react';
import classes from './OrderContainer.module.css';

const OrderContainer = () => {
    return (
        <div className={classes.Order}>
            <table>
                <thead>
                    <tr>
                        <th colSpan={2}><span>Product</span></th>
                        <th  ><span  >Quantity</span></th>
                        <th>&nbsp;</th>
                        <th  ><span  >Item price</span></th>
                        <th  ><span  >Discount</span></th>
                        <th  ><span  >Subtotal</span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td width={1}  >
                            <a href="/" title=" Something 1">
                                <img src="/" width={50} height={50} alt=" Something 1" />
                            </a>
                        </td>
                        <td>
                            <a href="/" title=" Something 1" >Something 1</a>
                            <p style={{ fontSize: '12px' }}>"ingredients"</p>
                        </td>
                        <td width={1}>
                            <input type="number" defaultValue={1} placeholder="Quantity" />
                        </td>
                        <td width={1}><a href="/" title="Remove">Remove</a></td>
                        <td width="10%"  >
                            <span  >C$45.00</span>
                        </td>
                        <td width="10%"  >
                            <span  > 
                                <strong> - C$0.00 </strong>
                            </span>
                        </td>
                        <td width="10%"  >
                            <span  >C$45.00</span>
                        </td>
                    </tr>
                    <tr>
                        <td width={1}  >
                            <a href="/" title=" Something 2">
                                <img src="/" width={50} height={50} alt=" Something 2" />
                            </a>
                        </td>
                        <td>
                            <a href="/" title=" Something 2" className="gui-bold">Something 2</a>
                            <p style={{ fontSize: '12px' }} >"Ingredients"</p>
                        </td>
                        <td width={1}>
                            <input type="number" defaultValue={1} placeholder="Quantity" />
                        </td>
                        <td width={1}><a href="/" title="Remove">Remove</a></td>
                        <td width="10%"  >
                            <span  >C$105.00</span>
                        </td>
                        <td width="10%"  >
                            <span  ><strong>- C$42.00</strong></span>
                        </td>
                        <td width="10%"  > <span  >C$63.00</span>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={7}><a href="/" title="Continue shopping">« Continue shopping</a></td>
                    </tr>
                </tbody>
            </table>
            <div >
                <div>
                    <div >
                        <div >
                            <div >Discount</div>
                            <div >
                                <strong>- C$42.00 </strong>
                            </div>
                            <div />
                        </div>
                        <div  />
                        <div >
                            <div ><strong>Subtotal excl. VAT:</strong></div>
                            <div ><strong>C$108.00</strong></div>
                            <div />
                        </div>
                        <div >
                            <div >GST 5%</div>
                            <div >C$5.40</div>
                            <div />
                        </div>
                        <div  />
                        <div >
                            <div ><strong>Total incl. tax:</strong></div>
                            <div ><strong>C$113.40</strong></div>
                            <div  />
                        </div>
                    </div>
                    <div >
                        <a href="/" title="Checkout">Proceed to checkout</a>
                    </div>
                </div>
                <div />
            </div>
        </div>


    );
};

export default OrderContainer;