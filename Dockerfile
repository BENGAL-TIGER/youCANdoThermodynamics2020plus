FROM jupyter/datascience-notebook:latest

USER $NB_UID

# more R packages  
RUN conda install --quiet --yes \
    'r-rstudio=3.6.3' \
    && \
    conda clean --all -f -y && \
    fix-permissions "${CONDA_DIR}" && \
    fix-permissions "/home/${NB_USER}"

RUN pip install --no-cache notebook