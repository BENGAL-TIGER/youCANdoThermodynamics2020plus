FROM jupyter/datascience-notebook:latest

USER $NB_UID

# more R packages  
# RUN conda install -c r rstudio --quiet --yes \
#     && \
#     conda clean --all -f -y && \
#     fix-permissions "${CONDA_DIR}" && \
#     fix-permissions "/home/${NB_USER}"


RUN conda update conda
 && conda install -c r rstudio \
 && pip install jupyter-rsession-proxy \
#  && pip install --no-cache notebook  \
 && conda clean --all -f -y  \
 && fix-permissions "/home/${NB_USER}"

RUN pip install --no-cache notebook