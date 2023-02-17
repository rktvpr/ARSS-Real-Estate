import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_LISTING } from '../utils/queries';

const SingleListing = () => {
    const { listingId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_LISTING, {
    // pass URL parameter
    variables: { listingId: listingId },
  });

  const listing = data?.listing || {};

  if (loading) {
    return <div>One moment please!</div>;
  }
  return (
    <div className="">

    </div>
  );
};

export default SingleListing;