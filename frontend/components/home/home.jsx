import React from 'react';
import EthnicityFormContainer from './ethnicity_form_container';

class Home extends React.Component {
  render() {
    return (
      <div id="home">
        <div id="home-img">
          <section className="typewriter">
            <h1>discover <span>you.</span></h1>
          </section>
          <section id="see-more">
            <p>scroll for more</p>
            <i className="fa fa-long-arrow-down" aria-hidden="true"></i>
          </section>
        </div>
        <div id="ethnicity-form-container">
          <EthnicityFormContainer />
        </div>
        <div id="more-info">
          <div id="more-info-container">
            <h1>Ethnic Diversity</h1>
            <div id="info-paragraphs">
              <p>
                Single nucleotide polymorphisms, frequently called SNPs
                (pronounced “snips”), are the most common type of genetic
                variation among different ethnic populations. Each SNP
                represents a difference in a single DNA building block,
                called a nucleotide. For example, a SNP may replace the
                nucleotide cytosine (C) with the nucleotide thymine (T)
                in a certain stretch of DNA.
              </p>
              <br></br>
              <p>
                SNPs occur normally throughout a person’s DNA. They occur
                once in every 300 nucleotides on average, which means there
                are roughly 10 million SNPs in the human genome. Most
                commonly, these variations are found in the DNA between
                genes. They can act as biological markers, helping scientists
                locate genes that are associated with disease.
              </p>
              <br></br>
              <p>
                Most SNPs have no effect on health or development. Some
                of these genetic differences, however, have proven to be
                very important in the study of human health. Researchers
                have found SNPs that may help predict an individual’s
                response to certain drugs, susceptibility to environmental
                factors such as toxins, and risk of developing particular
                diseases. SNPs can also be used to track the inheritance of
                disease genes within families. Future studies will work to
                identify SNPs associated with complex diseases such as heart
                disease, diabetes, and cancer.
              </p>
              <p id="disclaimer">
                This exerpt was taken from the U.S. National Library of Medicine
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
