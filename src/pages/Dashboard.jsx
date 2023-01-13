import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';



const Dashboard = () => {
  return (

    <div>


      <Typography gutterBottom variant="h3" align="center">
        Dashboard
      </Typography>
      <Grid>
        <Card style={{ padding: "2px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>

            </Typography>
            <form>
              <Grid container spacing={1}>
                <Grid lg={6} item>

                  <div>
                    <div class="lsdiv">
                      <iframe class="feargreedindex" src="/fg.html" scrolling="no" title="dashboard instance">
                      </iframe>
                    </div>
                  </div>
                </Grid>


                <Grid lg={12} item>

                  <div>
                    <div style={{width:"1800",height:"1000"}}>
                      <iframe class="" style={{width:"1800",height:"1000"}} src="/CQ.html" scrolling="no" title="dashboard instance">
                      </iframe>
                    </div>
                  </div>
                </Grid>

                <Grid lg={6} item>

                  <div>
                    <div class="lsdiv">
                      <iframe class="volitility" src="/bl.html" scrolling="no" title="dashboard instance">
                      </iframe>
                    </div>
                  </div>
                </Grid>

                <Grid item xs={7}>
                  <div>
                    <div class="lsdiv">
                      <iframe class="lsposition" src="/position.html" scrolling="no" title="dashboard instance">
                      </iframe>
                    </div>
                  </div>
                </Grid>

                <Grid item xs={8} >

                  <div>
                    <div class="avgbtcdiv">
                      <iframe class="avgbtc" src="/baft.html" scrolling="no" title="dashboard instance">
                      </iframe>
                    </div>
                  </div>
                </Grid>



                <Grid item xs={8}>
                  <div class="longshortdiv">
                    <iframe class="LongShortRatio" src="/lsr.html" scrolling="no" title="dashboard instance">
                    </iframe>
                  </div></Grid>





                <Grid item xs={6}>

                  <div class="nftscandiv">
                    <iframe class="nftscan" src="https://www.nftscan.com/" scrolling="no" title="nftscan"  >
                    </iframe>
                  </div>

                </Grid>


                <Grid item xs={6}>

                  <div class="nftstatsdiv">
                    <iframe class="nftstats" src="https://www.nft-stats.com/" scrolling="no" title="dashboard instance">
                    </iframe>
                  </div>

                </Grid>



                <Grid item xs={8}>


                  <div class="trackerdiv">
                    <iframe class="tracker" src="https://www.nftscan.com/analytics/tracker" scrolling="no" title="dashboard instance">
                    </iframe>
                  </div>

                </Grid>


                <Grid item xs={6}>

                  <div>
                    <div class="nftdiv">
                      <iframe class="bayc" src="https://nftgo.io/collection/bored-ape-yacht-club/overview" scrolling="no" title="dashboard instance">
                      </iframe>
                    </div>
                  </div>


                </Grid>





                <Grid item xs={6}>

                  <div>
                    <div class="nftdiv">
                      <iframe class="punks" src="https://nftgo.io/collection/cryptopunks/overview" scrolling="no" title="dashboard instance">
                      </iframe>
                    </div>
                  </div>

                </Grid>


                <Grid item xs={10}>
                  <div class="defillamadiv">
                    <iframe class="defillama" src="https://defillama.com/" scrolling="no" title="dashboard instance"></iframe>
                  </div>
                </Grid>


                <div style={{width: "100%",}}>
                  <h1 style={{ "font-size": "40px", padding: "10px" }} > borrow and lending ratio: </h1>
                  <div class="flex">
                    <div class="borrowearndiv">
                      <iframe class="borrowHist" src="https://linen.app/interest-rates/borrow/historical" scrolling="no" title="dashboard instance"></iframe>
                    </div>

                    <div class="borrowearndiv">
                      <iframe class="earnHist" src="https://linen.app/interest-rates/earn/historical" scrolling="no" title="dashboard instance"></iframe>
                    </div>


                  </div>
                </div>





              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>





      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
























      </div>

    </div>
  );
};
export default Dashboard;
