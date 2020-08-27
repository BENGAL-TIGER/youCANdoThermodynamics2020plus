FROM jupyter/datascience-notebook:latest

USER $NB_UID

# more R packages  
# RUN conda install -c r rstudio --quiet --yes \
#     && \
#     conda clean --all -f -y && \
#     fix-permissions "${CONDA_DIR}" && \
#     fix-permissions "/home/${NB_USER}"


# RUN conda create -n studioaudience \
#  && activate studioaudience \
#  && conda install -c r rstudio \
#  && conda clean --all -f -y    \
#  && fix-permissions "/home/${NB_USER}"

# RUN pip install jupyter-rsession-proxy nbgitpuller
RUN pip install nbgitpuller
#  && pip install --no-cache notebook  \
# pip install nbgitpuller

RUN pip install --no-cache notebook