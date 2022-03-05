import React, { MouseEventHandler, useEffect, useState } from "react";
import EpisodeCard from "../../components/episodeCard";

import Modal from "../../components/modal";
import { getEpisodesInfo } from "../../services";
import { EpisodeResponse } from "../../services/types";

interface Props {
  show: boolean;
  handleClose: MouseEventHandler;
  episodes: number[];
}

const EpisodeInfo = (props: Props) => {
  const [episodeInfo, setEpisodeInfo] = useState<EpisodeResponse | null>(null);
  const [episodeLoading, setEpisodeLoading] = useState(false);

  const fetchEpisodeInfo = async (url: number[]) => {
    setEpisodeLoading(true);
    const data = await getEpisodesInfo(url);
    setEpisodeInfo(data);
    setEpisodeLoading(false);
  };

  useEffect(() => {
    fetchEpisodeInfo(props.episodes);

    return () => setEpisodeInfo(null);
  }, [props.episodes]);

  return (
    <Modal handleClose={props.handleClose} show={props.show}>
      <EpisodeCard loading={episodeLoading} episodeInfo={episodeInfo} />
    </Modal>
  );
};

export default EpisodeInfo;
